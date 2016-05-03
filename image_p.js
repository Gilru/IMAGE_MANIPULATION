var Picture = function (imageTag) {
    this.originalImage = imageTag;
    this.modifyImageData = Picture.copyImageData(imageTag);
}

//
Picture.copyImageData = function (imageTag) {
    //image onload
    var canvas = document.createElement("canvas");
    canvas.height=imageTag.height;
    canvas.width = imageTag.width;
    var ctx= canvas.getContext("2d");

    ctx.drawImage(imageTag,0,0);
    var imgData=ctx.getImageData(0,0,canvas.width,canvas.height);


    return imgData;
}
Picture.prototype.applyEffect= function () {
    //===============repeated code========================
    var canvas = document.createElement("canvas");
    canvas.height=this.modifyImageData.height;
    canvas.width = this.modifyImageData.width;
    var ctx= canvas.getContext("2d");
    //===============repeated code========================


    for (var i=0;i<this.modifyImageData.data.length;i+=4)
    {
        this.modifyImageData.data[i]=255-this.modifyImageData.data[i];
        this.modifyImageData.data[i+1]=255-this.modifyImageData.data[i+1];
        this.modifyImageData.data[i+2]=255-this.modifyImageData.data[i+2];
        this.modifyImageData.data[i+3]=255;
    }
    ctx.putImageData(this.modifyImageData,0,0);
     return canvas;


}