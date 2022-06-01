import { getStorage } from "./storage";
const uploadImg = async (images: Record<string, string>[]) => {
  const formData = new FormData();
  for (let i = 0; i < images.length; i++) {
    const photo = {
      uri: images[i].localUri,
      type: "image/jpeg",
      name: images[i].filename,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    formData.append("files", photo);
  }
  const token = await getStorage("token");
  const resNoJson = await fetch("http://localhost:7001/user/uploadImage", {
    body: formData,
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  });
  const res = await resNoJson.json();
  if (res.success) {
    return res.data;
  } else {
    throw Error("图片上传失败");
  }
};

export default uploadImg;
