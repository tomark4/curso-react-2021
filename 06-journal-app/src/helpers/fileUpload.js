export const fileUpload = async (file) => {
  const url = ` https://api.cloudinary.com/v1_1/du1ex2lhe/upload`;
  const formData = new FormData();
  formData.append('upload_preset','ml_default');
  formData.append('file',file);
  try {
    const resp = await fetch(url, {
      method: 'POST',
      body: formData
    });

    if(resp.ok){
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      // throw await resp.json();
      return null;
    }

  } catch(err){
    throw err;
  }
}
