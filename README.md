QUICK START

Prepare qmlweb repository: 

1. git clone --recurse-submodules https://github.com/qmlweb/qmlweb.git
2. cd qmlweb (go to qmlweb dir)
3. npm install (install qmlweb dependencies)
4. npm link (link qmlweb repository as local npm library)

Prepare qmlweb.github.io repository:

5. cd .. (leave qmlweb repository)
6. git clone --recurse-submodules https://github.com/qmlweb/qmlweb.github.io.git (clone qmlweb webpage repository)
7. npm link qmlweb
8. npm install (install dependencies)
9. npx vite (this run webserwer, open browser and go to http://localhost:5173/ , qmlweb.github.io page shoud appear)
10. npx vite build (build page, page will be build in ./dist folder)
 