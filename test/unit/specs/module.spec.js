let imagefactory;

const IOS = (Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad');
const ANDROID = (Ti.Platform.osname === 'android');

describe('ti.imagefactory', function () {

	it('can be required', () => {
		imagefactory = require('ti.imagefactory');

		expect(imagefactory).toBeDefined();
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

	describe('methods', () => {
		var newBlob = '';
		beforeEach(() => {
			let imageFilename = 'flower.jpg';
			newBlob = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, `images/${imageFilename}`).read();
		});

		describe('imageWithRotation', () => {
			it('to rotate the image context',  () => {
				var degree = 10.0;

				expect(imagefactory.imageWithRotation(newBlob, degree)).toEqual(jasmine.any(Function));
			});
		});

		describe('imageWithAlpha',  () => {
			it('should have an alpha layer',  () => {
				expect(imagefactory.hasAlpha(newBlob)).toEqual(jasmine.any(Function));
			});
		});

		describe('imageWithTransparentBorder',  () => {
			it('to returns a copy of the image with a transparent border of the given size added around its edges',  () => {
				expect(imagefactory.hasAlpha(newBlob)).toEqual(true);
				var borderSize = 5;

				expect(imagefactory.imageWithTransparentBorder(newBlob, borderSize)).toEqual(jasmine.any(Function));
			});
		});

		describe('imageAsCropped',  () => {
			it('to crop image as per given coordinates',  () => {
				var newParam = { width: 100, height: 100, x: 50, y: 50 };

				expect(imagefactory.imageAsCropped(newBlob, newParam)).toEqual(jasmine.any(Function));
			});
		});

		describe('imageAsResized',  () => {
			it('to resize the image for given width anf height',  () => {
				var newParam = { width: 140, height: 140 };

				expect(imagefactory.imageAsResized(newBlob, newParam)).toEqual(jasmine.any(Function));
			});
		});

		describe('imageAsThumbnail',  () => {
			it('to create image thumbnail',  () => {
				var newParam = { size: 64, borderSize: 5, cornerRadius: 10, format: imagefactory.PNG };

				expect(imagefactory.imageAsThumbnail(newBlob, newParam)).toEqual(jasmine.any(Function));
			});
		});

		describe('imageWithRoundedCorner',  () => {
			it('to make the rounded corner image',  () => {
				var newParam = { borderSize: 4, cornerRadius: 8, format: imagefactory.PNG };

				expect(imagefactory.imageWithRoundedCorner(newBlob, newParam)).toEqual(jasmine.any(Function));
			});
		});
	});
});
