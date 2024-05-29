import { ClipLoader } from 'react-spinners'
export function Loader() {
  return (
    <div className="flex justify-between">
      <ClipLoader color="#dadada" className="mr-5" />
      <p>送信中</p>
    </div>
  )
}
