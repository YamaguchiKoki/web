import TrpcProvider from '@/app/_trpc/provider'

interface Props {
  children: React.ReactNode
}
export default function AuthLayout({ children }: Props) {
  return <TrpcProvider>{children}</TrpcProvider>
}
