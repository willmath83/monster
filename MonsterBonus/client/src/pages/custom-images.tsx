import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExampleImage } from "@/components/ExampleImage";

export default function CustomImages() {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-6">
              Adding Custom Images
            </h1>
            
            <div className="prose max-w-none mb-8">
              <h2>How to Add Your Own Images</h2>
              
              <p>
                There are two main ways to add your own images to the MonsterVIP website:
              </p>
              
              <h3>Method 1: Use an Image Hosting Service</h3>
              <p>
                The easiest way is to upload images to a free image hosting service and use the direct image URLs:
              </p>
              <ol>
                <li>Upload your images to services like Imgur, ImgBB, Cloudinary, etc.</li>
                <li>Get the direct image URL after uploading</li>
                <li>Replace image URLs in the server/storage.ts file with your new URLs</li>
              </ol>
              
              <h3>Method 2: Store Images Locally in the Project</h3>
              <p>
                For a more professional approach, add images directly to your project:
              </p>
              <ol>
                <li>Add your images to the client/src/assets/images folder</li>
                <li>Update the client/src/assets/images/index.ts file to import and export your images</li>
                <li>Import the images in your components as needed</li>
              </ol>
              
              <p>
                Below is an example component showing how to use images from your assets folder:
              </p>
            </div>
            
            <ExampleImage />
            
            <div className="mt-8 prose max-w-none">
              <h3>Modifying Content in Server Data</h3>
              <p>
                To change the images used in the casino sites, banners, or blog posts:
              </p>
              <ol>
                <li>Open the server/storage.ts file</li>
                <li>Find the imageUrl properties in the sample data objects</li>
                <li>Replace them with your own image URLs</li>
              </ol>
              
              <pre className="bg-gray-100 p-4 rounded-md">
{`// Example:
{
  ...
  imageUrl: "https://your-image-hosting-service.com/your-image.jpg",
  ...
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}