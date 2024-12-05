export default function objectToFormData(obj) {
  let formData = new FormData();

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let value = obj[key];
      if (typeof value !== 'string') {
        value = JSON.stringify(value);
      }
      formData.append(key, value);
    }
  }

  return formData;
}
