# API: image

> Source: `io/image.ts`

Provides a static façade for image manipulation operations,
primarily focusing on resizing image streams.

## Classes

### Image

The Image class provides static methods for common image processing tasks.<br/>All methods operate on and return {@link InputStream} objects, making them<br/>suitable for piping image data through the file system or network.

#### Methods

<hr/>

#### resize

- `resize (original:InputStream, type:string, width:number, height:number):InputStream`

  Resizes an image contained within an InputStream to the specified dimensions.<br/><br/>@param original The InputStream containing the original image data.<br/>@param type The target format of the resized image (e.g., "png", "jpeg", "gif").<br/>@param width The target width in pixels.<br/>@param height The target height in pixels.<br/>@returns A new InputStream containing the resized image data in the specified format.

