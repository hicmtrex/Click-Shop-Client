import { ref, watch } from 'vue';

function useImageUpload() {
  let imageFile = ref('');
  let imageUrl = ref('');

  function handleImageSelected(event) {
    if (event.target.files.length === 0) {
      imageFile.value = '';
      imageUrl.value = '';
      return;
    }

    imageFile.value = event.target.files[0];
  }

  watch(imageFile, (imageFile) => {
    if (!(imageFile instanceof File)) {
      return;
    }

    let fileReader = new FileReader();

    fileReader.readAsDataURL(imageFile);

    fileReader.addEventListener('load', () => {
      imageUrl.value = fileReader.result;
    });
  });

  return {
    imageFile,
    imageUrl,
    handleImageSelected,
  };
}

export default useImageUpload;
