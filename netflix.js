var liste = [
    { image: "photo-movie/1.jpg",type:"movie", }, 
    { image: "photo-movie/2.jpg",type:"movie", }, 
    { image: "photo-movie/2.jpg",type:"movie", }, 
    { image: "photo-movie/4.jpg",type:"movie", },
    { image: "photo-movie/5.jpg",type:"movie", }, 
    { image: "photo-série/6.jpg",type:"série" },
    { image: "photo-série/7.jpg",type:"série" }, 
    { image: "photo-série/8.jpg",type:"série" }, 
    { image: "photo-série/9.jpg",type:"série" },
    { image: "photo-série/10.jpg",type:"série" },

]
for (let index = 0; index < liste.length; index++) {
    console.log(liste[index]);
    if (liste[index].type === "movie") {
        document.getElementById("movies").innerHTML +=
            `
        <div id="carte">
            <img  width="260px" src= ${liste[index].image}>
        
        <div>
        `
    } else {
        document.getElementById("series").innerHTML +=
        `
        <div id="carte">
            <img  width="260px" src= ${liste[index].image}>
        
        <div>
        `
    }



}