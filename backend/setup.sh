mongo xflix --eval "db.dropDatabase()" 
mongoimport -d xflix -c videos --file data/export_video.json