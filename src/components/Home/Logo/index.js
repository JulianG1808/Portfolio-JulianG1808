import './index.scss'
 import { useEffect, useRef } from 'react'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
//  import gsap from 'gsap-trial'

const Logo = () => {
    const bgRef = useRef()
  
    // useEffect(() => {
    //   //gsap.registerPlugin(DrawSVGPlugin)
  
    //   gsap
    //     .timeline()
    //     .to(bgRef.current, {
    //       duration: 1,
    //       opacity: 1,
    //     })
    // }, [])
  
    return (
      <div className="logo-container" ref={bgRef}>
  
        <svg id='logo' width="265" height="375" viewBox="0 0 265 375" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M193.904 37.6105C196.414 33.5062 198.406 29.8856 199.865 26.7572C201.762 22.6936 202.9 19.1759 202.9 16.4C202.9 11.9384 201.167 8.30689 197.587 5.91988C194.185 3.65214 189.399 2.70001 183.6 2.70001C178.481 2.70001 172.435 3.7615 165.51 5.79703C158.551 7.74758 152.024 10.9469 145.934 15.3749C139.828 19.7782 136.3 25.0421 136.3 31.2C136.3 37.4223 141.191 41.4119 148.423 43.7762C154.779 45.8542 163.702 46.9808 175.07 47.2411C171.245 51.6331 166.098 57.1667 159.612 63.8529C150.956 72.642 145.19 78.205 142.232 80.6522C140.669 81.8772 139.406 82.9834 138.51 83.9574C138.061 84.446 137.648 84.961 137.334 85.4925C137.042 85.9887 136.7 86.7242 136.7 87.6C136.7 88.595 137.133 89.6265 138.113 90.2801C138.915 90.8145 139.801 90.9 140.4 90.9C141.118 90.9 141.742 90.6726 142.19 90.4621C142.663 90.2392 143.128 89.9439 143.57 89.6218C144.436 88.9925 145.416 88.1152 146.493 87.042C153.46 81.1433 161.209 74.0591 169.74 65.7956L169.747 65.7887L169.754 65.7816C177.752 57.9089 183.604 51.7167 187.248 47.2403C193.153 46.9153 201.323 46.0573 211.725 44.6788C218.891 43.7403 224.743 42.8205 229.237 41.913L214.318 64.616C214.317 64.6181 214.315 64.6201 214.314 64.6222C198.627 88.2203 181.774 119.127 163.751 157.307C156.694 171.424 149.77 186.93 142.98 203.823C123.808 207.809 107.138 212.899 92.9946 219.111L92.9857 219.115L92.9768 219.119C78.555 225.589 65.3307 233.278 53.3109 242.192C41.3008 251.098 31.6487 260.326 24.4069 269.891C10.0324 288.876 2.70001 307.993 2.70001 327.2C2.70001 341.576 5.39995 352.815 11.2045 360.506C17.0546 368.257 25.2923 372.1 35.6 372.1C56.0971 372.1 75.0193 359.353 92.4321 335.056L92.4343 335.053C111.775 307.976 135.146 266.039 162.544 209.337C179.556 204.992 192.934 200.228 202.583 195.002C212.459 189.726 221.025 183.886 228.259 177.47L228.269 177.462L228.278 177.453C235.489 170.923 242.859 162.665 250.394 152.709L250.533 152.525L250.636 152.318C250.998 151.594 251.3 150.732 251.3 149.8C251.3 148.99 250.992 148.019 250.1 147.35C249.343 146.782 248.507 146.7 248 146.7C246.14 146.7 244.954 148.062 244.32 149.013L244.313 149.024C240.356 155.024 234.013 161.915 225.175 169.7C215.814 177.476 207.172 183.423 199.246 187.582C192.336 191.151 181.988 194.735 168.101 198.302L187.862 156.265C187.862 156.264 187.862 156.264 187.863 156.264C188.929 153.998 191.728 148.067 196.261 138.468C200.746 128.968 203.49 123.083 204.464 120.861C205.549 118.691 207.942 113.837 211.64 106.311C215.487 98.6162 218.124 93.4747 219.568 90.8457C221.181 88.1569 223.715 83.8217 227.165 77.8507C230.612 71.8834 233.577 67.0763 236.063 63.4128C242.048 54.7671 246.915 48.0485 250.67 43.2386C252.55 40.8315 254.132 38.9269 255.424 37.5077C256.751 36.0491 257.656 35.234 258.187 34.8801L260.587 33.2801L260.645 33.2416L260.7 33.2C261.447 32.6398 262.5 31.5916 262.5 30C262.5 29.2307 262.242 28.4856 261.733 27.8746C261.261 27.3078 260.675 26.9775 260.179 26.7788C259.229 26.3989 258.093 26.3 257 26.3C254.903 26.3 250.843 26.803 245.031 27.7273C239.31 28.5264 235.007 29.4192 232.315 30.4618C222.435 34.105 209.654 36.5076 193.904 37.6105ZM140.019 85.9558C140.019 85.9554 140.024 85.9531 140.034 85.9497C140.023 85.9545 140.018 85.9562 140.019 85.9558ZM141.612 88.0874C141.611 88.0875 141.614 88.0808 141.622 88.0668C141.616 88.0803 141.612 88.0873 141.612 88.0874ZM28.579 353.174L28.5637 353.147L28.5478 353.121C25.1354 347.393 23.3008 339.235 23.3 328.407C23.4321 305.233 29.2507 286.406 40.574 271.734C51.9917 257.074 70.8973 242.812 97.533 229.029C106.883 224.356 120.448 219.734 138.315 215.192C134.309 225.333 128.507 239.27 120.902 257.015L120.899 257.024C117.209 265.721 111.383 277.51 103.396 292.419L103.388 292.435L103.38 292.45C95.6878 307.304 87.6036 321.087 79.1289 333.8C72.8142 343.007 66.7729 349.93 61.0225 354.661C55.2922 359.266 49.1718 361.5 42.6 361.5C36.3253 361.5 31.7471 358.807 28.579 353.174ZM159.246 16.9673L159.266 16.9557L159.286 16.9437C164.286 13.9441 169.246 12.5 174.2 12.5C179.339 12.5 182.891 13.6319 185.217 15.5349C187.492 17.3966 188.7 19.9767 188.7 23.6C188.7 26.7366 186.794 31.5649 182.278 38.3H177.6C176.333 38.3 174.386 38.2361 171.732 38.1035C169.42 37.975 167.565 37.8476 166.156 37.722C164.8 37.4548 163.154 37.1931 161.23 36.9352C159.582 36.5773 158.404 36.1902 157.617 35.8124C156.597 35.1724 155.321 34.3428 153.787 33.3199C153.222 32.9431 152.5 31.9437 152.5 29.2C152.5 23.4935 154.746 19.5551 159.246 16.9673Z" stroke="white" stroke-width="5"/>
        </svg>

      </div>
    )
  }

export default Logo