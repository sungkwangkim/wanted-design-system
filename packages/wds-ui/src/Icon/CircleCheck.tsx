import SvgIcon from './SvgIcon'

function CircleCheck() {
  return (
    <SvgIcon viewBox="0 0 36 36">
      <defs>
        <filter colorInterpolationFilters="auto" id="filter-1">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
        <path
          d="M20,2.08333333 C29.8951018,2.08333333 37.9166667,10.1048982 37.9166667,20 C37.9166667,29.8951018 29.8951018,37.9166667 20,37.9166667 C10.1048982,37.9166667 2.08333333,29.8951018 2.08333333,20 C2.08333333,10.1048982 10.1048982,2.08333333 20,2.08333333 Z M27.4963187,13.2809518 L17.5069142,23.2290028 L12.5556038,18.2205827 C12.0702555,17.7296363 11.2788123,17.7250981 10.7878659,18.2104463 C10.2969195,18.6957946 10.2923813,19.4872378 10.7777296,19.9781842 L16.6110629,25.8788008 C17.0976677,26.3710182 17.891615,26.3741178 18.3820483,25.8857149 L29.2604153,15.0523816 C29.7495821,14.5652398 29.7512237,13.7737852 29.2640819,13.2846184 C28.7769401,12.7954516 27.9854856,12.79381 27.4963187,13.2809518 Z"
          id="path-2"
        />
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="wanted_VOD_player_play"
          transform="translate(-1305.000000, -361.000000)"
        >
          <g
            id="icon/2.fill/circlechek/24"
            transform="translate(1303.000000, 359.000000)"
            filter="url(#filter-1)"
          >
            <g>
              <mask id="mask-3" fill="white">
                <use xlinkHref="#path-2" />
              </mask>
              <use
                id="Combined-Shape"
                fill="#333333"
                fillRule="nonzero"
                xlinkHref="#path-2"
              />
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
}

export default CircleCheck
