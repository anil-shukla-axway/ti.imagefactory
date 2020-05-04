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
		const blob = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory + imageFilename).read();
		var newBlob = imagefactory.imageWithAlpha(blob, {format: imagefactory.PNG });
		newBlob = ImageFactory.imageWithTransparentBorder(blob, { borderSize: 10, format: ImageFactory.PNG });
		newBlob = ImageFactory.imageAsCropped(blob, { width: 100, height: 100, x: 50, y: 50 });
		newBlob = ImageFactory.imageWithRoundedCorner(blob, { borderSize: 4, cornerRadius: 8, format: ImageFactory.PNG });
		newBlob = ImageFactory.imageAsThumbnail(blob, { size: 64, borderSize: 5, cornerRadius: 10, format: ImageFactory.PNG });
		newBlob = ImageFactory.imageAsResized(blob, { width: 140, height: 140 });
		newBlob = ImageFactory.imageTransform(blob,
					{ type: ImageFactory.TRANSFORM_CROP, width: 200, height: 200 },
					{ type: ImageFactory.TRANSFORM_ROUNDEDCORNER, borderSize: 6, cornerRadius: 20, format: ImageFactory.PNG }
				);
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
					expect(imagefactory.roundedCornerImage(newBlob,cornerSize,borderSize)).toEqual(newBlob);
				});
			});
})
