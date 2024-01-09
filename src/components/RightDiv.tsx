import { FC } from 'react'
import Peers from './Peers'
import RetirementStrategy from './RetirementStrategy'

interface RightDivProps {
  
}

const RightDiv: FC<RightDivProps> = ({}) => {
  return <div className='w-full h-full p-2'>
    <div className='w-full md:hidden block'>
      <Peers />
    </div>
    <div className='w-full md:block flex justify-center items-start h-[85%] md:h-fit'>
    <RetirementStrategy />
    </div>
  </div>
}

export default RightDiv