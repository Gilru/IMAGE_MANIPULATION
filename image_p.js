var Picture = function (imageTag) {
    this.originalImage = imageTag;
    this.modifyImageData = Picture.copyImageData(imageTag);
}

//
Picture.copyImageData = function (imageTag) {
    //image onload
    //===============memory code========================
    var canvas = document.createElement("canvas");
    canvas.height = imageTag.height;
    canvas.width = imageTag.width;
    var ctx = canvas.getContext("2d");

    ctx.drawImage(imageTag, 0, 0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //===============repeated code========================


     return imgData;
    console.log(imageTag)
    // return ctx;
}


//====================test method modify===========================
Picture.prototype.applyEffect = function () {
    //===============repeated code========================
    var canvas = document.createElement("canvas");
    canvas.height = this.modifyImageData.height;
    canvas.width = this.modifyImageData.width;
    var ctx = canvas.getContext("2d");
    //===============repeated code========================


    for (var i = 0; i < this.modifyImageData.data.length; i += 4) {
        this.modifyImageData.data[i] = 255 - this.modifyImageData.data[i];
        this.modifyImageData.data[i + 1] = 255 - this.modifyImageData.data[i + 1];
        this.modifyImageData.data[i + 2] = 255 - this.modifyImageData.data[i + 2];
        this.modifyImageData.data[i + 3] = 255;
    }
    ctx.putImageData(this.modifyImageData, 0, 0);
    return canvas;


}
//====================to modify end===========================

Picture.prototype.blackandWhiteEffect = function () {


    //===============repeated code========================
    var canvas = document.createElement("canvas");
    canvas.height = this.modifyImageData.height;
    canvas.width = this.modifyImageData.width;
    var ctx = canvas.getContext("2d");
    //===============repeated code========================


    for (var i = 0; i < this.modifyImageData.data.length; i += 4) {
        var avg = (this.modifyImageData.data[i] + this.modifyImageData.data[i + 1] + this.modifyImageData.data[i + 2])/3  //[R,G,B,A]
        this.modifyImageData.data[i] = avg * 1.4;
        this.modifyImageData.data[i + 1] = avg * 0.5;
        this.modifyImageData.data[i + 2] = avg * 0.3;
    }
    ctx.putImageData(this.modifyImageData, 0, 0);
    return canvas;


}

Picture.prototype.opacity = function (integerBetween0To100) {
    //===============repeated code========================
    var canvas = document.createElement("canvas");
    canvas.height = this.modifyImageData.height;
    canvas.width = this.modifyImageData.width;
    var ctx = canvas.getContext("2d");
    //===============repeated code========================

    //===============tempory need to copy array========================
    var imgData = this.modifyImageData;
    console.log(imgData.data === this.modifyImageData.data,"Before");




    for (var i = 0; i < imgData.data.length; i += 4) {
         //[R,G,B,A]
        // var avg = (this.modifyImageData.data[i] + this.modifyImageData.data[i + 1] + this.modifyImageData.data[i + 2])/3
        if(i <= 10)console.log(imgData.data[i + 3],"Before");

        imgData.data[i + 3] *= (integerBetween0To100/100);
        if(i <= 10)console.log(imgData.data[i + 3],"After");
    }
    console.log(imgData.data === this.modifyImageData.data,"After");
    ctx.putImageData(imgData, 0, 0);

    return canvas;

}





















