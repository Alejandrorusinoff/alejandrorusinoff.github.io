let matches = [{a:1},{a:2},{a:3},{a:4},{a:5},{a:6},{a:7},{a:8},{a:9}]
let like = [{a:1}]
let dislike = [{a:3},{a:5}]

for (let i = 0; i < matches.length; i++) {
    if (matches[i].a !== like[i].a) {
        console.log(matches[i].a)
    }
    
}