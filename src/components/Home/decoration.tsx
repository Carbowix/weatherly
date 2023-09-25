import ellipseImg from 'assets/images/Ellipse.png'
import waveImg from 'assets/images/wave3.png'
interface ellipsePosition {
  id: string
  left: string
  top: string
}
const ellipsePlaces: ellipsePosition[] = [
  {
    id: 'e_0',
    left: '14',
    top: '20'
  },
  {
    id: 'e_1',
    left: '10',
    top: '70'
  },
  {
    id: 'e_2',
    left: '86',
    top: '15'
  },
  {
    id: 'e_3',
    left: '95',
    top: '50'
  }
]

export default function HomePageDecoration() {
  return (
    <>
      {ellipsePlaces.map((ellipse) => (
        <img
          key={ellipse.id}
          src={ellipseImg}
          className="absolute w-8 z-10 animate-ping hidden md:block"
          style={{ left: `${ellipse.left}%`, top: `${ellipse.top}%` }}
        />
      ))}

      <img
        src={waveImg}
        className="absolute w-96 bottom-4 right-4 animate-spin hidden md:block"
      />
    </>
  )
}
