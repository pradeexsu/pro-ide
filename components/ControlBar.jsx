import React from "react";
import DropDown from "./DropDown"
import Button from "./Button";
import useStore from "../useStore";

const ControlBar = () => {

    const playIcon =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABWUlEQVRoge2ZPU4DMRBGZ4GQBjpamhwAiYaGG3AIbsCPBAfgCpS0lLRcAAlRkvTUtElFgxA8CjQSIZD1rtcezeJXb/G9lWV/HosUCoXCd4BzYN06RzR88QQcWGeJgnlugZF1plawyCtwCWxaZ2vELyLKM3AIVNYZg1giotwBO9Y5awkQAXgHroEt67x/EiiiTIETYNU69wINRZQxsG+dfY6WIgAfwA2wbe0gIlEiygtwAQy9iyi27aBDEcWmHSQQAYt2kEhEydcOEoso6dtBJhGAN+CKVO0go4jSqB0Er0mA9r8hiomIHFVV9bDso5VMYWLYFZF7atqBB5Eg1qwDBDAWkWPPS2smIqcislcn0YiMu1Uvtl/3B6L7iqKlcSO5QEIR9zXe/cXK/VW3F8OHR5yPg9wP6NKeyl0QIOF+iO3+WSH/qdwFPyTcP7314jH0DBhY5ygUCv+cTyS4gJtcT/1lAAAAAElFTkSuQmCC";

    const linkIcon =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAB4klEQVRYhe2WMUscQRiG37kuaZTcgYUIuSIQq3C/QSHXHVyhTfoU+Qem8BdcEwsPrMJJxNLCJihoYqeYnCIYCNekTEKEE+zusbg5+LLZ3XP3ZjGFb7U78837fDM73+xID7pnuZBmQF3SK0k1SY8k/ZD0UVLbOfc7JCsKngZ2SdYV0CwKXgG6KfCRBsGTSID3gQ/AGvA1ZiXKRcK7QNXElIDVSMxKkfBKTKwDTkzcge0v5cxhWdKRpG/+/UzSgnPuVzTQOYekz6ZpLifzX/nZLcXNPBK3aVbgzPZlWgGg7s0ugJ6kA0nPJJEypiqpYZpOszBHJrnqPGGvLGaFZ6nzxphxOyHgPaABPAHmgbaHA+ynjOsCU5PCu779KTBjYlvAH6CWNi4U/IWHtUz8jE8qCHw6zQTY820DYB147j9Hw3+e/HAPiO72v0w8aMB45YLX72ICNBmWXpJ2yLLhjLE9sfqYH0tMbBlYAQ6B78A58J6sdR4xvTAJdMbEVhgewxPdqqJH8WPz/DMNLmlf0rakS2ADeDNJIiPjT2YFjuNmR4hSS0ngbcR4FSiZ/mphcA8ox+zuL8A7YAu4LgxukmhSVJ1nTCJ8nccosYQY3l5fS3opaVbSjYaXiY5zbi8E/EH/hW4BQxZ3s8tlG7QAAAAASUVORK5CYII=";

    const codeIcon =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABY0lEQVRIid2VvU4CURCFz1ULagNUJBQmgKWxx9JGY6vhIXwAeQNaNTba4QuYQIwdjyE1BYmgjRXgZ7FDvO6PsLs2OtXuzOw3d889u1f66+GyPgg0JLUk7Uh6k/Qo6cE595F7VUAbmBONAVDKC++EoK/AIjQkmzIh+AhoWr4M9L3a8W/Aa6F60ZPtKi28AOwBZ8ATUE/om9iA7jK3tQY87JZLScOYvqakbbuN1JPgP7ml6PXVTDaAWVi+JLiv+TtwC9wAU8v1YuAAF2nhI2AXqFqtAoyB8xh4Jwu8ZrAxULGeqg1NDW+H4ZbvWW5qMt2ZbKngDb429JvPCTw+IBqzVZr7Nm1J2rTrU+fc87LgnHsBDiQdSTpUYMehpK7ft+oN7m1Vk4R6neAjawH7QGEtsAe4tgFzPI9bLb1bYgaceIA+ULZ8MzfcQBuhjVwQ/IrJDfeGlLK6JSkiBwPBYZHdLf8uPgFg0ps1J0TQswAAAABJRU5ErkJggg==";

    const ioIcon =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABsklEQVRoge2Wu0oDQRSGv2MhFoJYCAbxVgs2FoLPoD6Al0rs1TLgc2hjqS9goy8gCLFQ0VewFFTwEvS3SDZs4iQ7u8pOwPkgMDlnOPv/u2fnLEQikUgkEgmHdQYkDQJbwBowB4yWLaqDR+AOOAaOzKyeTrYZkFQBToGF0uTlowasmtlDEmgZaN75C/pXfMIVsGRmHwADqcQ2/S8eGhq3kj9pAxvlaylMS2u6hZ6B4SBy8vNkZiPQbkDh9OTHzAzaW6gXdWAfmAZmmut6ifls1JuqY3+1xPwP8hqoOPZPlJjvasC3hVx8Bs4D/gbWHbHNEvPZZLTQm6Q9SWPN314zVla+awv9m2O0b/mrOfBbgs8BSTqTNONxnVlJ5wXqO98BXwMTjv2d5/Rkjps1VaC+04BvC315xFx7fOv51HfymznQ+fl9IGk8q5AaU/ewQP3Mwr3IfU7nJM4BgJdAWorwnCzSBu4DCCnKXbJIGzgJIKQoLa3pd2AIuATmQyjKwTWwaGbvkHoCZvYGLAO3gYT5cAOsJOKdSBqStCupJun1D4/KoryqoWVHjS6JRCKRSCTSN3wD+9ro0cux1mkAAAAASUVORK5CYII=";
    const fullScreenIcon =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAB/klEQVRYhc2XvUscURTFzyxauKuBkGivqCT/QqoU+dBqN62lf4xiiKVKEAkhEBaTSMBC9A+wEbSwNqisleAHmuhq8bOYEXdn374vlHjKO/ede96dN+fdEfAcWATOcOMEmAdKygHoAuaAYw+ec+AX0Ceg6rEgj2mDgIkIniWR7ioU2wYBGxE8/wqSWtrpgR1D7E8ET5eA60DV+8CLPBMwCOyGtiABriV1OJR+k7Qs6UTSepIkf01JQFHSK0lPJY1IGnf2wLMDV0DFSXbH+R648OlAyCvwEhFSPFSAU0RocZuArxaiOlA2FB91rPkSImAMeGchbOoE9p1fARXgQzsBh4b4aEY8YiGuA2WfnIzrteH5qYCZXLAG9DTszlXg0lU84ynS6hPzt5fIJLBJekGYTMYmwlm8gWcI+AFsAR9JfcMP2M9EI4I8IwgeIoKLFwI1JIH59wf8TSasC6SHcCo7GEvAS0POfR3CYeBnVusTUBTpGNWIAx7mMywBe7mchUdhRO2s2PbO6zRbsdO2sVjxo7yM2sF1HfuaVZSA/zqQPNhI5uuEVUmdwFug21K4BLyR9ETSd1+1oWN5DbNZDdH6nTsRIwDgt0HAYgQPBUnGGd+BAUOsP4LnoiBpJWLhqiG2FsGzIuAZ6R+yz+/5MfAZwyRDeqnNAkcePOekk1HvDS7kA7mP9z3+AAAAAElFTkSuQmCC";
    const lang = {
        c: "C",
        c99: "C-99",
        cpp: "C++",
        cpp14: "C++ 14",
        cpp17: "C++ 17",
        java: "Java",
        php: "PHP",
        perl: "Perl",
        python3: "Python 3",
        python2: "Python 2",
        ruby: "Ruby",
        go: "Go Lang",
        scala: "Scala",
        bash: "Bash Shell",
        sql: "SQL",
        pascal: "Pascal",
        csharp: "C#",
        vbn: "VB.Net",
        haskell: "Haskel",
        objc: "Objective C",
        swfit: "Swift",
        brainfuck: "Brainf**k",
        rust: "RUST",
        r: "R Language",
        dart: "Dart",
        nodejs: "NodeJS",
        coffeescript: "CoffeeScript",
        kotlin: "Kotlin"
    };

    const navIcon =
    "https://img.icons8.com/plasticine/100/000000/pandora-app.png";

    const setShowInput = useStore(state => state.setShowInput)
    const showInput = useStore(state => state.showInput)
    const setTheme = useStore(state => state.setTheme)
    const handleTheme = (theme)=>{
        setTheme(theme)
    }

    return (
        <div className="control-bar bg-dark text-light text-start sticky-top">

<a className="navbar-brand" href="#">
                <img
                    src={navIcon}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="p-logo"
                />
            </a>


            <div className="text-end controller">
                <Button iconUrl={ioIcon} text={"Input!"} listener={()=> setShowInput(!showInput)} />
                <Button iconUrl={linkIcon} text={"Copy Link!"} />
                {/* <Button iconUrl={fullScreenIcon} /> */}
                <DropDown arr={lang}  listener={handleTheme}/>
                <Button iconUrl={playIcon} text={"Run"} isPrimary />
            </div>
        </div>
    );

}
export default ControlBar;  