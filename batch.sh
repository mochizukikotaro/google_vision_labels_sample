for file in `\find images -type f`; do
  node getLabels.js $file
done
