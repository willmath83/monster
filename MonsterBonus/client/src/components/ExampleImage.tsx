import { placeholderCasinoBanner } from "@/assets/images";

export function ExampleImage() {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <h3 className="p-4 bg-gray-50 font-medium">Example Custom Image Component</h3>
      <div className="p-4">
        <p className="mb-4 text-gray-600">
          This is an example of how to reference an image from your assets folder.
          When you add your own images to the client/src/assets/images folder, you can
          import and use them like this.
        </p>
        <img 
          src={placeholderCasinoBanner} 
          alt="Example banner"
          className="w-full h-48 object-cover rounded-lg"
        />
        <p className="mt-4 text-sm text-gray-500">
          To use your own image, upload it to the assets/images folder, update the
          import in the assets/images/index.ts file, and then reference it here.
        </p>
      </div>
    </div>
  );
}