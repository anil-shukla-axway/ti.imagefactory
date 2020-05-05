let imagefactory;

const IOS = (Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad');
const ANDROID = (Ti.Platform.osname === 'android');

describe('ti.imagefactory', function () {

	it('can be required', () => {
		imagefactory = require('ti.imagefactory');
		expect(imagefactory).toBeDefined();
	});

	beforeEach(() => {
		var imageFilename = "flower.jpg";
		var newBlob = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory + imageFilename).read();
		});

	describe('constants', () => {
		describe('TRANSFORM_*', () => {
			it('TRANSFORM_CROP', () => {
				expect(imagefactory.TRANSFORM_CROP).toEqual(jasmine.any(Number));
			});

			it('TRANSFORM_RESIZE', () => {
				expect(imagefactory.TRANSFORM_RESIZE).toEqual(jasmine.any(Number));
			});

			it('TRANSFORM_THUMBNAIL', () => {
				expect(imagefactory.TRANSFORM_THUMBNAIL).toEqual(jasmine.any(Number));
			});

			it('TRANSFORM_ROUNDEDCORNER', () => {
				expect(imagefactory.TRANSFORM_ROUNDEDCORNER).toEqual(jasmine.any(Number));
			});

			it('TRANSFORM_TRANSPARENTBORDER', () => {
				expect(imagefactory.TRANSFORM_TRANSPARENTBORDER).toEqual(jasmine.any(Number));
			});

			it('TRANSFORM_ALPHA', () => {
				expect(imagefactory.TRANSFORM_ALPHA).toEqual(jasmine.any(Number));
			});

			it('TRANSFORM_ROTATE', () => {
				expect(imagefactory.TRANSFORM_ROTATE).toEqual(jasmine.any(Number));
			});
		});

		describe('QUALITY_*', () => {
			it('QUALITY_DEFAULT', () => {
				expect(imagefactory.QUALITY_DEFAULT).toEqual(jasmine.any(Number));
			});

			it('QUALITY_NONE', () => {
				expect(imagefactory.QUALITY_NONE).toEqual(jasmine.any(Number));
			});

			it('QUALITY_LOW', () => {
				expect(imagefactory.QUALITY_LOW).toEqual(jasmine.any(Number));
			});

			it('QUALITY_MEDIUM', () => {
				expect(imagefactory.QUALITY_MEDIUM).toEqual(jasmine.any(Number));
			});

			it('QUALITY_HIGH', () => {
				expect(imagefactory.QUALITY_HIGH).toEqual(jasmine.any(Number));
			});
		});
	});
		describe ('hasAlpha' , () =>{
				it('imgage should has an alpha layer',  () =>{
					expect(imagefactory.hasAlpha(newBlob)).toEqual(true);
				});
			});
			describe('imageWithAlpha',  () =>{
				it('to returns a copy of the given image and check image should has an alpha layer ',  () =>{
					expect(imagefactory.hasAlpha(newBlob)).toEqual(true);
					expect(imagefactory.imageWithAlpha(newBlob)).toEqual(jasmine.any(Function));
				});
			});
			describe('transparentBorderImage',  () =>{
				it('to returns a copy of the image with a transparent border of the given size added around its edges',  () =>{
					expect(imagefactory.hasAlpha(newBlob)).toEqual(true);
					var borderSize = 5;
					var rotateImage = imagefactory.transparentBorderImage(newBlob,borderSize);
					expect(rotateImage).toEqual(newBlob);
				});
			});
			describe('croppedImage',  () =>{
				it('to returns a copy of this image that is cropped to the given bounds',  () =>{
					let newImage = imagefactory.croppedImage(newBlob);
					expect(newImage).toEqual(newBlob);
				});
			});
			describe('rotateImage',  () =>{
				it('to rotate the image context',  () =>{
					var rotateImage = imagefactory.rotateImage(newBlob,degree)
					var degree = 10.0;
					expect(rotateImage).toEqual(newBlob);
				});
			});
			describe('roundedCornerImage',  () =>{
				it('to creates a copy of this image with rounded corners',  () =>{
					var cornerSize = 8;
					var borderSize = 4;
					var roundedImage = imagefactory.roundedCornerImage(newBlob,cornerSize,borderSize)
					expect(roundedImage).toEqual(newBlob);
				});
			});
			describe('imageCrop',  () =>{
				it('to crop image as per given coordinates',  () =>{
					var newParam = { width: 100, height: 100, x: 50, y: 50 };
					expect(imagefactory.imageAsCropped(blob,newParam)).toEqual(jasmine.any(Function));
				});
			});
			describe('imageResize',  () =>{
				it('to resize the image for given width anf height',  () =>{
					var newParam = { width: 140, height: 140 };
					expect(imagefactory.imageResize(blob,newParam)).toEqual(jasmine.any(Function));
				});
			});
			describe('imageThumbnail',  () =>{
				it('to create image thumbnail',  () =>{
					var newParam = { size: 64, borderSize: 5, cornerRadius: 10, format: ImageFactory.PNG };
					expect(imagefactory.imageThumbnail(blob,newParam)).toEqual(jasmine.any(Function));
				});
			});
			describe('imageRoundedCorner',  () =>{
				it('to make the rounded corner image',  () =>{
					var newParam = { borderSize: 4, cornerRadius: 8, format: ImageFactory.PNG };
					expect(imagefactory.imageRoundedCorner(blob,newParam)).toEqual(jasmine.any(Function));
				});
			});
			describe('imageTransparentBorder',  () =>{
				it('to make border transparent for given border size',  () =>{
					var newParam = { borderSize: 10, format: ImageFactory.PNG };
					expect(imagefactory.imageTransparentBorder(blob,newParam)).toEqual(jasmine.any(Function));
				});
			});
			describe('imageAlpha',  () =>{
				it('to verify the image alpha layer',  () =>{
					var newParam = {format: imagefactory.PNG };
					expect(imagefactory.imageAlpha(blob,newParam)).toEqual(jasmine.any(Function));
				});
			});
			describe('imageRotate',  () =>{
				it('to rotate the image on given angle',  () =>{
					var newParam = 10.0;
					expect(imagefactory.imageRotate(blob,newParam)).toEqual(jasmine.any(Function));
				});
			});
})
