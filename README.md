# Restaurant Menu App

## 1 - Project set up

```
npm install
```

## 2 - Create firebase account

## 3 - Add firebase rules 
rules are in `firebase-rules.txt`

## 4 - Add firebase keys
Copy firebase keys and add in `src/firebase.js`

## 5 Test project
```
npm run serve
```

> Notes : You can't publish web pages in development stage. Because client javascript can't write file, only PHP and NodeJS can do it. 

## 6 - Build App for production
```
npm run build
``` 

## 7 - Set up for production
I made a PHP file which is in `deploy/post.php`
Copy `deploy` folder and paste in generated `/dist/` folder.

## 8 - Use in production
Copy `/dist/` folder and deploy on PHP sever. You can also test at localhost with Xampp.

> If you finished Step number 8 then you can publish your built pages.

----

# Templates & Blocks Development
Add more blocks in `src/blocks.js` &
Add more templates in `src/templates.js`
<img src="https://res.cloudinary.com/dpnea22ek/image/upload/v1552557787/gram.jpg" width="100%">



----
## Technologies

- Ant Vue UI
- Firebase
- GrapesJS
- Gramateria
- MaterializeCSS
---
@ronaldaug
