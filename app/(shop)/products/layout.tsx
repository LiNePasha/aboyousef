import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'جميع المنتجات | ابو يوسف',
  description: 'تصفح جميع قطع غيار وأكسسوارات الموتوسيكلات من ابو يوسف - بنيلي، هوجان، فيجوري وجميع الماركات',
  keywords: 'قطع غيار موتوسيكلات, أكسسوارات موتوسيكلات, بنيلي, هوجان, فيجوري, ابو يوسف',
  openGraph: {
    title: 'جميع المنتجات | ابو يوسف',
    description: 'تصفح جميع قطع غيار وأكسسوارات الموتوسيكلات',
    type: 'website',
    locale: 'ar_EG',
  },
  alternates: {
    canonical: 'https://aboyousef.com/products',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
