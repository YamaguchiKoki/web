export function getImageElementFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const image = new Image()
      image.src = reader.result as string
      image.onload = () => {
        resolve(image)
      }
    }
    reader.onerror = (error) => reject(error)
  })
}
