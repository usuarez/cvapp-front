import { useDispatch } from "react-redux";
import { uploadedPhoto } from "../context/actions/auth";

    
    const cloudinary = window.cloudinary
    export const  uploadWidget = cloudinary.createUploadWidget({
    cloudName: 'dnpo1nny3', 
    uploadPreset: 'tqcay3xa', folder: 'widgetUpload'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        localStorage.setItem('uploadedPhoto', JSON.stringify(result.info))
        
      }
    }
  )

  