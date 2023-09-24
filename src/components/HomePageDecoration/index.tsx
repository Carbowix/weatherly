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
      <a
        className="github-fork-ribbon"
        href="https://github.com/Carbowix/weatherly"
        data-ribbon="Fork me on GitHub"
        title="Fork me on GitHub"
      >
        Fork me on GitHub
      </a>
      {ellipsePlaces.map((ellipse) => (
        <img
          key={ellipse.id}
          src="/src/public/Ellipse.png"
          className="absolute w-8 z-10 animate-ping hidden md:block"
          style={{ left: `${ellipse.left}%`, top: `${ellipse.top}%` }}
        />
      ))}

      <img
        src="/src/public/wave3.png"
        className="absolute w-96 bottom-4 right-4 animate-spin hidden md:block"
      />
    </>
  )
}
