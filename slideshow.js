// we need image url


let carousel_div=document.getElementById('slideshow')
function carousel(){

    let images=[`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1080/sources/r1/cms/prod/2959/1652959-i-aa0a71d19ae4`,`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1080/sources/r1/cms/prod/9668/1649668-i-3d1bf67b1bcf`,`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/833/1650833-i-0fe6a37d72ce`,`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/815/1650815-i-332c354839bd`]

    //all of this images should be visible one by one 
    let i=1;
    let imgElement=document.createElement('img');
    imgElement.src=images[0];//giving img tag image src
    carousel_div.append(imgElement)

    
    setInterval(function() {
        if(i===images.length){
            i=0;
        }
        imgElement.src=images[i];//giving img tag image src
        carousel_div.append(imgElement);//appending the image in div to show in browser

        i++;//
        
    }, 3000);
}

carousel();