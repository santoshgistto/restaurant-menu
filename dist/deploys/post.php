<?php
 // Allow from any origin
 // Allow from any origin
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 1000');   
        header('Access-Control-Expose-Headers: true');
        header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT OPTIONS");         
        header("Access-Control-Allow-Headers: Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding, V-Token");

function send($status,$code,$msg){
    http_response_code($code);
    echo json_encode(Array(["msg" => $msg,"status"=>$status]));
    exit();
}

if(!isset($_POST['token'])){
     send('error',501,'Please provide API key to deploy!');
}else if($_POST['token'] !== 'rGD1oFEX7rMcA8jfbXwBtAPgQImnEl2HIafFasN5JWXxV5lpW2rvZq2sAMtmuPVR'){
    send('error',501,'You are not authorized!');
}

if( 
!isset($_POST['html']) || 
!isset($_POST['css']) || 
!isset($_POST['webId']) ||
!isset($_POST['title'])
){ 
    send('error',501,'Please provide all data!');
}

$html = $_POST["html"];
$css = $_POST["css"];
$webId = $_POST["webId"];
$title = $_POST["title"];

$htmlData = <<<EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>$title</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <style>$css</style>
</head>
<body>
$html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>
EOF;




//remove redundant (white-space) characters
$replace = array(
    //remove tabs before and after HTML tags
    '/\>[^\S ]+/s'   => '>',
    '/[^\S ]+\</s'   => '<',
    //shorten multiple whitespace sequences; keep new-line characters because they matter in JS!!!
    '/([\t ])+/s'  => ' ',
    //remove leading and trailing spaces
    '/^([\t ])+/m' => '',
    '/([\t ])+$/m' => '',
    // remove JS line comments (simple only); do NOT remove lines containing URL (e.g. 'src="http://server.com/"')!!!
    '~//[a-zA-Z0-9 ]+$~m' => '',
    //remove empty lines (sequence of line-end and white-space characters)
    '/[\r\n]+([\t ]?[\r\n]+)+/s'  => "\n",
    //remove empty lines (between HTML tags); cannot remove just any line-end characters because in inline JS they can matter!
    '/\>[\r\n\t ]+\</s'    => '><',
    //remove "empty" lines containing only JS's block end character; join with next line (e.g. "}\n}\n</script>" --> "}}</script>"
    '/}[\r\n\t ]+/s'  => '}',
    '/}[\r\n\t ]+,[\r\n\t ]+/s'  => '},',
    //remove new-line after JS's function or condition start; join with next line
    '/\)[\r\n\t ]?{[\r\n\t ]+/s'  => '){',
    '/,[\r\n\t ]?{[\r\n\t ]+/s'  => ',{',
    //remove new-line after JS's line end (only most obvious and safe cases)
    '/\),[\r\n\t ]+/s'  => '),',
    //remove quotes from HTML attributes that does not contain spaces; keep quotes around URLs!
    '~([\r\n\t ])?([a-zA-Z0-9]+)="([a-zA-Z0-9_/\\-]+)"([\r\n\t ])?~s' => '$1$2=$3$4', //$1 and $4 insert first white-space character found before/after attribute
);
$htmlData = preg_replace(array_keys($replace), array_values($replace), $htmlData);
//remove optional ending tags (see http://www.w3.org/TR/html5/syntax.html#syntax-tag-omission )
$remove = array(
    '</option>', '</li>', '</dt>', '</dd>', '</tr>', '</th>', '</td>'
);
$htmlData = str_ireplace($remove, '', $htmlData);
$path = $webId;
$domain = $_SERVER['HTTP_HOST'];
if(!file_exists($path)){
    mkdir($path, 0777, true);
}
file_put_contents($path.'/index.html', $htmlData);
http_response_code(200);
$suc = Array([
    "msg" => "Successfully deploy",
    "status"=>"success",
    "url"=> $domain.'/deploys/'.$path
    ]);
echo json_encode($suc);