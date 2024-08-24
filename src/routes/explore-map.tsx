import { createFileRoute } from '@tanstack/react-router'
import Footer from '@/components/ui/footer'
import { HeaderCard } from '@/components/headerCard'
import { CardMapa } from '@/components/component/Cardmapa'
import { Map } from '@/components/map'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const cardData = [
  {
    id: 1,
    imageSrc: '/imagemmao.png',
    name: 'Ms. Saint-Martin Doranyia Pascal',
    description:
      'In 2022 my husband and I moved to Portugal to follow our simple life dream and build our',
    location: 'São Paulo, Brasil',
    amount: '€3,182.49',
    progress: 45,
    donationText: 'Donations',
  },
  {
    id: 2,
    imageSrc: '/imagem1.png',
    name: 'Huni Kuin Sacred Support',
    description:
      'I tend not to speak too much about this work, perhaps it is to be experienced and not to be explained.',
    location: 'São Paulo, Brasil',
    amount: '4.141',
    progress: 45,
    donationText: 'Donations',
  },
  {
    id: 3,
    imageSrc: '/imagem1.png',
    name: 'Huni Kuin Sacred Support',
    description:
      'I tend not to speak too much about this work, perhaps it is to be experienced and not to be explained.',
    location: 'São Paulo, Brasil',
    amount: '4.141',
    progress: 45,
    donationText: 'Donations',
  },
]

export const Route = createFileRoute('/explore-map')({
  component: Explore,
})

function Explore() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col md:flex-row gap-4 flex-grow">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <HeaderCard />
          <CardMapa cardData={cardData} />
          <Pagination className="flex items-center justify-center mt-4">
            <PaginationContent className="flex items-center justify-between w-full space-x-2">
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem className="flex">
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                  <PaginationLink href="#">2</PaginationLink>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">8</PaginationLink>
                  <PaginationLink href="#">9</PaginationLink>
                  <PaginationLink href="#">10</PaginationLink>
                </PaginationItem>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <div className="flex-none w-full md:w-1/2 h-64 md:h-auto">
          <Map />
        </div>
      </div>
      <div className="mt-4 flex-shrink-0">
        <Footer />
      </div>
    </div>
  )
}
