if [ -e list.txt ]; then
  rm -f list.txt
  touch list.txt
fi

for file in `\find images -type f`; do
  node getLabels.js $file >> list.txt
done
