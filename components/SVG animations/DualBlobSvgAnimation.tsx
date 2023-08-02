export default function DualBlobSvgAnimation(
  { bigScale,
    smallScale,
    bigColor,
    smallColor
  }: {
    bigScale: number;
    smallScale: number;
    bigColor: string;
    smallColor: string;
  }) {
  return (
    <svg viewBox="0 0 200 200" className='w-full h-full'>
      <path fill={bigColor} transform="translate(100 100) scale(1.4)">
        <animate attributeName='d' dur="40s" repeatCount="indefinite"
          values='M36.5,-64.6C49.4,-55.9,63.1,-50.1,69.4,-39.9C75.6,-29.6,74.4,-14.8,70.9,-2C67.5,10.9,62,21.7,57.5,35.1C53.1,48.5,49.7,64.4,40.3,70.7C30.9,77,15.5,73.7,1.6,70.8C-12.2,68,-24.4,65.7,-36.5,61C-48.6,56.2,-60.5,49,-69.5,38.5C-78.5,27.9,-84.4,14,-85.7,-0.7C-86.9,-15.4,-83.5,-30.8,-73.7,-39.9C-63.9,-49,-47.7,-51.8,-34.4,-60.2C-21,-68.6,-10.5,-82.6,0.7,-83.8C11.9,-85,23.7,-73.3,36.5,-64.6Z;

                M37.2,-65.5C47,-58.7,52.9,-46.3,58.8,-34.5C64.8,-22.6,70.8,-11.3,74.5,2.1C78.2,15.6,79.6,31.2,74.8,45.1C70,59,59.1,71.2,45.6,77.5C32.1,83.8,16,84.2,0.6,83.2C-14.9,82.2,-29.8,79.8,-42.8,73.2C-55.8,66.6,-67,55.9,-74,43C-80.9,30.1,-83.7,15,-83.4,0.2C-83.1,-14.7,-79.8,-29.5,-73.2,-42.8C-66.5,-56.2,-56.4,-68.2,-43.6,-73.2C-30.9,-78.3,-15.4,-76.3,-0.9,-74.8C13.7,-73.3,27.4,-72.2,37.2,-65.5Z;

                M42,-68.5C55.7,-64.9,68.8,-56.1,74.5,-43.8C80.2,-31.5,78.5,-15.8,76.6,-1.1C74.7,13.6,72.6,27.1,65.9,37.8C59.3,48.4,48.1,56.1,36.3,63C24.6,69.9,12.3,76,0.6,75C-11.2,74.1,-22.3,66,-34.6,59.4C-46.8,52.8,-60.1,47.6,-67.6,37.9C-75,28.3,-76.6,14.1,-74.4,1.3C-72.2,-11.6,-66.3,-23.2,-59.8,-34.5C-53.2,-45.8,-46.1,-56.7,-36.1,-62.3C-26,-68,-13,-68.4,0.6,-69.4C14.2,-70.4,28.4,-72.1,42,-68.5Z;

                M34.1,-59.1C46.8,-51.8,61.3,-47.8,68.1,-38.5C74.9,-29.2,73.9,-14.6,73.4,-0.3C72.8,14,72.7,28,65.9,37.2C59.1,46.5,45.6,51.1,33.5,56.5C21.4,61.8,10.7,67.9,-0.8,69.3C-12.3,70.6,-24.6,67.3,-34.7,60.8C-44.8,54.3,-52.7,44.6,-57.1,34C-61.5,23.3,-62.5,11.7,-61.4,0.6C-60.4,-10.5,-57.4,-20.9,-53.5,-32.5C-49.6,-44,-44.7,-56.5,-35.6,-65.9C-26.6,-75.3,-13.3,-81.6,-1.3,-79.4C10.7,-77.2,21.5,-66.5,34.1,-59.1Z;

                M39,-63.4C53.4,-59.3,69.9,-54.6,77.6,-43.9C85.4,-33.2,84.5,-16.6,84.2,-0.2C83.9,16.3,84.3,32.6,76.8,43.8C69.4,54.9,54,61,39.9,67.3C25.8,73.6,12.9,80.2,-0.1,80.4C-13.1,80.6,-26.3,74.4,-39.5,67.6C-52.7,60.8,-66,53.3,-74.2,41.9C-82.4,30.5,-85.5,15.3,-83.2,1.4C-80.8,-12.6,-73,-25.1,-63.5,-34.2C-54,-43.3,-42.7,-48.9,-31.9,-55C-21,-61.2,-10.5,-67.8,0.9,-69.4C12.3,-71,24.6,-67.5,39,-63.4Z;

                M36.5,-64.6C49.4,-55.9,63.1,-50.1,69.4,-39.9C75.6,-29.6,74.4,-14.8,70.9,-2C67.5,10.9,62,21.7,57.5,35.1C53.1,48.5,49.7,64.4,40.3,70.7C30.9,77,15.5,73.7,1.6,70.8C-12.2,68,-24.4,65.7,-36.5,61C-48.6,56.2,-60.5,49,-69.5,38.5C-78.5,27.9,-84.4,14,-85.7,-0.7C-86.9,-15.4,-83.5,-30.8,-73.7,-39.9C-63.9,-49,-47.7,-51.8,-34.4,-60.2C-21,-68.6,-10.5,-82.6,0.7,-83.8C11.9,-85,23.7,-73.3,36.5,-64.6Z' />
      </path>
      <path fill={smallColor} transform="translate(100 100) scale(1.15)">
        <animate attributeName='d' dur="30s" repeatCount="indefinite"
          values='M43.7,-79.1C54.9,-69.2,61.1,-54,69.4,-40C77.8,-25.9,88.3,-12.9,87.8,-0.3C87.3,12.4,75.9,24.8,66,36.2C56.1,47.5,47.7,57.8,37,64.4C26.2,70.9,13.1,73.7,1,71.9C-11,70.1,-22,63.7,-35.7,58.8C-49.5,54,-65.9,50.8,-75.3,41.2C-84.8,31.7,-87.2,15.8,-85.6,1C-83.9,-13.9,-78,-27.8,-71.4,-42.2C-64.7,-56.5,-57.2,-71.3,-45.2,-80.7C-33.1,-90.2,-16.6,-94.2,-0.2,-93.9C16.2,-93.6,32.5,-89,43.7,-79.1Z;

                M41.4,-73.1C51.7,-65.8,56.8,-50.7,64.9,-37.3C73.1,-23.8,84.3,-11.9,87.7,2C91.2,15.9,86.9,31.8,78.1,44.1C69.3,56.4,56,65.2,42.2,71.6C28.5,78,14.2,82,0.8,80.7C-12.7,79.3,-25.4,72.6,-37.6,65.4C-49.9,58.1,-61.8,50.3,-71.1,39.3C-80.4,28.4,-87,14.2,-87.8,-0.4C-88.5,-15,-83.3,-30.1,-73.4,-40C-63.6,-50,-49.1,-55,-36.1,-60.8C-23.1,-66.5,-11.5,-73.1,2,-76.5C15.5,-80,31.1,-80.4,41.4,-73.1Z;

                M42.1,-72.4C51.6,-67.4,54.5,-50.2,60.2,-36.2C65.9,-22.1,74.3,-11,74.2,0C74.2,11,65.6,21.9,60.1,36.3C54.6,50.7,52.3,68.6,42.7,78.6C33.2,88.6,16.6,90.8,0.9,89.3C-14.9,87.9,-29.8,82.7,-43.9,75.3C-58,67.9,-71.3,58.4,-78.1,45.5C-85,32.5,-85.5,16.3,-82.3,1.8C-79.2,-12.7,-72.5,-25.3,-64.3,-36C-56.2,-46.6,-46.5,-55.2,-35.6,-59.4C-24.6,-63.6,-12.3,-63.4,2,-66.8C16.3,-70.2,32.5,-77.3,42.1,-72.4Z;

                M46.7,-76.5C60.2,-73.1,70.7,-60,77,-45.6C83.2,-31.2,85.3,-15.6,82.7,-1.5C80.2,12.7,73.1,25.4,63.8,34.5C54.5,43.6,43,49.2,32,57.8C21.1,66.4,10.5,78.1,-0.4,78.9C-11.4,79.7,-22.9,69.5,-32.8,60.3C-42.8,51.1,-51.3,42.8,-62.1,32.9C-72.9,23,-86,11.5,-85.7,0.2C-85.4,-11.2,-71.7,-22.3,-61.1,-32.6C-50.5,-42.8,-43,-52.1,-33.3,-57.7C-23.6,-63.3,-11.8,-65.2,2.4,-69.3C16.6,-73.5,33.2,-79.8,46.7,-76.5Z;

                M39.6,-66.1C53.4,-60.6,68.1,-54.2,76.7,-43C85.4,-31.9,87.9,-15.9,86.6,-0.8C85.3,14.4,80,28.8,72,41C63.9,53.1,53.1,63.1,40.6,67.6C28.1,72,14.1,71,-0.2,71.4C-14.5,71.8,-29.1,73.7,-42.9,70C-56.7,66.3,-69.8,57.1,-74.4,44.5C-79,31.9,-75.1,16,-72.8,1.3C-70.5,-13.3,-69.8,-26.6,-65.6,-39.8C-61.3,-53,-53.5,-66,-42,-72.9C-30.4,-79.8,-15.2,-80.6,-1.2,-78.5C12.9,-76.5,25.8,-71.7,39.6,-66.1Z;

                M43.7,-79.1C54.9,-69.2,61.1,-54,69.4,-40C77.8,-25.9,88.3,-12.9,87.8,-0.3C87.3,12.4,75.9,24.8,66,36.2C56.1,47.5,47.7,57.8,37,64.4C26.2,70.9,13.1,73.7,1,71.9C-11,70.1,-22,63.7,-35.7,58.8C-49.5,54,-65.9,50.8,-75.3,41.2C-84.8,31.7,-87.2,15.8,-85.6,1C-83.9,-13.9,-78,-27.8,-71.4,-42.2C-64.7,-56.5,-57.2,-71.3,-45.2,-80.7C-33.1,-90.2,-16.6,-94.2,-0.2,-93.9C16.2,-93.6,32.5,-89,43.7,-79.1Z
              '/>
      </path>
    </svg>
  )
}
