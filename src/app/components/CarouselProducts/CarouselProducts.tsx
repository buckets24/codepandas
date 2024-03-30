import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shadcnui/ui/carousel"

const CarouselProducts = () => {

  const Product = () => {
    return (
      <div className="border-4 border-slate-200 bg-white rounded-lg p-10 h-[300px]">
        <h2>1111111</h2>
      </div>
    )
  }

  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="md:basis-1/3"><Product /></CarouselItem>
        <CarouselItem className="md:basis-1/3"><Product /></CarouselItem>
        <CarouselItem className="md:basis-1/3"><Product /></CarouselItem>
        <CarouselItem className="md:basis-1/3"><Product /></CarouselItem>
        <CarouselItem className="md:basis-1/3"><Product /></CarouselItem>
        <CarouselItem className="md:basis-1/3"><Product /></CarouselItem>
      </CarouselContent>
      <div className="relative flex justify-end mt-8 gap-3">
        <CarouselPrevious className="relative left-0 -bottom-10 top-0 w-10 h-10" />
        <CarouselNext className="relative left-0 -bottom-10 top-0 w-10 h-10" />
      </div>
    </Carousel>
  )
}

export default CarouselProducts