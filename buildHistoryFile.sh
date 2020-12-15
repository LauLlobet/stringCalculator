rm -rf history && mkdir history && cat src/index.spec.ts > ./history/history.ts && echo "\n//-------- IMPLEMENTATION --------\n" >> ./history/history.ts && cat src/index.ts >> ./history/history.ts
