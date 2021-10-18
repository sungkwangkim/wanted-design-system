import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from '../Button/Button'
import ModalActions from '../ModalActions/ModalActions'
import ModalContent from '../ModalContent/ModalContent'
import ModalTitle from '../ModalTitle/ModalTitle'
import Modal from './Modal'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  open: true,
  children: (
    <>
      <ModalTitle>
        <h1>
          맨유 레전드의 현실 조언, "호날두·포그바·브루노? 박지성이 있어야
          한다고…"
        </h1>
      </ModalTitle>
      <ModalContent>
        <img
          src="https://imgnews.pstatic.net/image/343/2021/10/18/0000108482_002_20211018161601509.jpg?type=w647"
          alt=""
        />
        <br />
        <br />
        "메이슨 그린우드·제이든 산초·크리스티아누 호날두·폴 포그바·브루노
        <br />
        페르난데스가 선발인 걸 봤다. 나는 그 팀에서 수비수로 뛰고 싶지 않다."
        <br />
        <br />
        게리 네빌은 "나는 이 선수들(메이슨 그린우드·제이든 산초·크리스티아누
        <br />
        호날두·폴 포그바·브루노 페르난데스)들을 좋아한다. 그러나 그들이 모두 한
        <br />
        팀에 있는 상황이라면, '일하는 말들(Work horses)'이 부족할 수밖에
        <br />
        없다"라고 스쿼드의 다양성을 강조했다
      </ModalContent>

      <ModalActions>
        <Button variant="outlined">취소</Button>
        <Button>확인</Button>
      </ModalActions>
    </>
  ),
}

export const FullScreen = Template.bind({})
FullScreen.args = {
  open: true,
  fullScreen: true,
  children: (
    <>
      <ModalTitle>
        <h1>
          맨유 레전드의 현실 조언, "호날두·포그바·브루노? 박지성이 있어야
          한다고…"
        </h1>
      </ModalTitle>
      <ModalContent>
        <img
          src="https://imgnews.pstatic.net/image/343/2021/10/18/0000108482_002_20211018161601509.jpg?type=w647"
          alt=""
        />
        <br />
        <br />
        "메이슨 그린우드·제이든 산초·크리스티아누 호날두·폴 포그바·브루노
        <br />
        페르난데스가 선발인 걸 봤다. 나는 그 팀에서 수비수로 뛰고 싶지 않다."
        <br />
        <br />
        게리 네빌은 "나는 이 선수들(메이슨 그린우드·제이든 산초·크리스티아누
        <br />
        호날두·폴 포그바·브루노 페르난데스)들을 좋아한다. 그러나 그들이 모두 한
        <br />
        팀에 있는 상황이라면, '일하는 말들(Work horses)'이 부족할 수밖에
        <br />
        없다"라고 스쿼드의 다양성을 강조했다
      </ModalContent>

      <ModalActions>
        <Button variant="outlined">취소</Button>
        <Button>확인</Button>
      </ModalActions>
    </>
  ),
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  open: true,
  fullWidth: true,
  children: (
    <>
      <ModalTitle>
        <h1>
          맨유 레전드의 현실 조언, "호날두·포그바·브루노? 박지성이 있어야
          한다고…"
        </h1>
      </ModalTitle>
      <ModalContent>
        <img
          src="https://imgnews.pstatic.net/image/343/2021/10/18/0000108482_002_20211018161601509.jpg?type=w647"
          alt=""
        />
        <br />
        <br />
        "메이슨 그린우드·제이든 산초·크리스티아누 호날두·폴 포그바·브루노
        <br />
        페르난데스가 선발인 걸 봤다. 나는 그 팀에서 수비수로 뛰고 싶지 않다."
        <br />
        <br />
        게리 네빌은 "나는 이 선수들(메이슨 그린우드·제이든 산초·크리스티아누
        <br />
        호날두·폴 포그바·브루노 페르난데스)들을 좋아한다. 그러나 그들이 모두 한
        <br />
        팀에 있는 상황이라면, '일하는 말들(Work horses)'이 부족할 수밖에
        <br />
        없다"라고 스쿼드의 다양성을 강조했다
      </ModalContent>

      <ModalActions>
        <Button variant="outlined">취소</Button>
        <Button>확인</Button>
      </ModalActions>
    </>
  ),
}

export const ScrollContent = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ScrollContent.args = {
  open: true,
  scroll: 'content',
  children: (
    <>
      <ModalTitle>
        <h1>
          맨유 레전드의 현실 조언, "호날두·포그바·브루노? 박지성이 있어야
          한다고…"
        </h1>
      </ModalTitle>
      <ModalContent>
        <img
          src="https://imgnews.pstatic.net/image/343/2021/10/18/0000108482_002_20211018161601509.jpg?type=w647"
          alt=""
        />
        <br />
        <br />
        "메이슨 그린우드·제이든 산초·크리스티아누 호날두·폴 포그바·브루노
        <br />
        페르난데스가 선발인 걸 봤다. 나는 그 팀에서 수비수로 뛰고 싶지 않다."
        <br />
        <br />
        게리 네빌은 "나는 이 선수들(메이슨 그린우드·제이든 산초·크리스티아누
        <br />
        호날두·폴 포그바·브루노 페르난데스)들을 좋아한다. 그러나 그들이 모두 한
        <br />
        팀에 있는 상황이라면, '일하는 말들(Work horses)'이 부족할 수밖에
        <br />
        없다"라고 스쿼드의 다양성을 강조했다
        <br />
        <br />
        예시도 들었다. 게리 네빌은 "대런 플레쳐·존 오셔·니키 버트·톰
        <br />
        클레벌리·박지성·오언 하그리브스 등이 여러 해에 걸쳐 맨체스터
        <br />
        유나이티드에서 게임을 뛰었던 이유다"라고 헌신적인 플레이어가 있었던 팀의
        <br />
        과거를 회상했다.
        <br />
        <br />
        <br />
        iPhones.
        <br />
        이어 게리 네빌은 "위대한 선수들 옆엔 일하는 말들이 필요했다. 현 시점의
        <br />
        맨체스터 유나이티드는 불균형이다. 경기력은 더 좋아질 필요가 있다"라면서
        <br />
        맨체스터 유나이티드 스쿼드의 최적화를 강조했다.
        <br />
        <br />
        <br />
        골을 넣는 스트라이커, 측면을 휘젓는 윙어, 마법을 부리는 공격형
        <br />
        미드필더도 중요하지만, 상대와 좌충우돌 부딪히고 활동량을 자랑하는
        <br />
        '살림꾼' 또한 팀에 꼭 있어야 한다. 게리 네빌은 언뜻 화려해 보이지만
        <br />
        실체는 불안 요소가 많은 맨체스터 유나이티드의 단점을 지적하고자 마음을
        <br />
        먹었던 모양이다.
        <br />
        <br />
        알렉스 퍼거슨 경의 총애를 받았던 박지성은 지금도 이렇게 맨체스터
        <br />
        유나이티드의 '좋은 예'로 회자되곤 한다.
        <br />
        <br />
        program, but it left many people wondering why Apple even wants our old
        <br />
        iPhones.
        <br />
        Apple has heavily promoted its trade-in program in recent years,
        <br />
        encouraging users to give up their old iPhone in exchange for a discount
        <br />
        on a new model. Over a third of Apple Store customers now utilize this
        <br />
        program, but it left many people wondering why Apple even wants our old
        <br />
        iPhones.
        <br />
        Apple has heavily promoted its trade-in program in recent years,
        <br />
        encouraging users to give up their old iPhone in exchange for a discount
        <br />
        on a new model. Over a third of Apple Store customers now utilize this
        <br />
        program, but it left many people wondering why Apple even wants our old
        <br />
        iPhones.
        <br />
        Apple has heavily promoted its trade-in program in recent years,
        <br />
        encouraging users to give up their old iPhone in exchange for a discount
        <br />
        on a new model. Over a third of Apple Store customers now utilize this
        <br />
        program, but it left many people wondering why Apple even wants our old
        <br />
        iPhones.
        <br />
      </ModalContent>

      <ModalActions>
        <Button variant="outlined">취소</Button>
        <Button>확인</Button>
      </ModalActions>
    </>
  ),
}

export const ScrollBody = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ScrollBody.args = {
  open: true,
  scroll: 'body',
  children: (
    <>
      <ModalTitle>
        <h1>
          맨유 레전드의 현실 조언, "호날두·포그바·브루노? 박지성이 있어야
          한다고…"
        </h1>
      </ModalTitle>
      <ModalContent>
        <img
          src="https://imgnews.pstatic.net/image/343/2021/10/18/0000108482_002_20211018161601509.jpg?type=w647"
          alt=""
        />
        <br />
        <br />
        "메이슨 그린우드·제이든 산초·크리스티아누 호날두·폴 포그바·브루노
        <br />
        페르난데스가 선발인 걸 봤다. 나는 그 팀에서 수비수로 뛰고 싶지 않다."
        <br />
        <br />
        게리 네빌은 "나는 이 선수들(메이슨 그린우드·제이든 산초·크리스티아누
        <br />
        호날두·폴 포그바·브루노 페르난데스)들을 좋아한다. 그러나 그들이 모두 한
        <br />
        팀에 있는 상황이라면, '일하는 말들(Work horses)'이 부족할 수밖에
        <br />
        없다"라고 스쿼드의 다양성을 강조했다
        <br />
        <br />
        예시도 들었다. 게리 네빌은 "대런 플레쳐·존 오셔·니키 버트·톰
        <br />
        클레벌리·박지성·오언 하그리브스 등이 여러 해에 걸쳐 맨체스터
        <br />
        유나이티드에서 게임을 뛰었던 이유다"라고 헌신적인 플레이어가 있었던 팀의
        <br />
        과거를 회상했다.
        <br />
        <br />
        <br />
        iPhones.
        <br />
        이어 게리 네빌은 "위대한 선수들 옆엔 일하는 말들이 필요했다. 현 시점의
        <br />
        맨체스터 유나이티드는 불균형이다. 경기력은 더 좋아질 필요가 있다"라면서
        <br />
        맨체스터 유나이티드 스쿼드의 최적화를 강조했다.
        <br />
        <br />
        <br />
        골을 넣는 스트라이커, 측면을 휘젓는 윙어, 마법을 부리는 공격형
        <br />
        미드필더도 중요하지만, 상대와 좌충우돌 부딪히고 활동량을 자랑하는
        <br />
        '살림꾼' 또한 팀에 꼭 있어야 한다. 게리 네빌은 언뜻 화려해 보이지만
        <br />
        실체는 불안 요소가 많은 맨체스터 유나이티드의 단점을 지적하고자 마음을
        <br />
        먹었던 모양이다.
        <br />
        <br />
        알렉스 퍼거슨 경의 총애를 받았던 박지성은 지금도 이렇게 맨체스터
        <br />
        유나이티드의 '좋은 예'로 회자되곤 한다.
        <br />
        <br />
        program, but it left many people wondering why Apple even wants our old
        <br />
        iPhones.
        <br />
        Apple has heavily promoted its trade-in program in recent years,
        <br />
        encouraging users to give up their old iPhone in exchange for a discount
        <br />
        on a new model. Over a third of Apple Store customers now utilize this
        <br />
        program, but it left many people wondering why Apple even wants our old
        <br />
        iPhones.
        <br />
        Apple has heavily promoted its trade-in program in recent years,
        <br />
        encouraging users to give up their old iPhone in exchange for a discount
        <br />
        on a new model. Over a third of Apple Store customers now utilize this
        <br />
        program, but it left many people wondering why Apple even wants our old
        <br />
        iPhones.
        <br />
        Apple has heavily promoted its trade-in program in recent years,
        <br />
        encouraging users to give up their old iPhone in exchange for a discount
        <br />
        on a new model. Over a third of Apple Store customers now utilize this
        <br />
        program, but it left many people wondering why Apple even wants our old
        <br />
        iPhones.
        <br />
      </ModalContent>

      <ModalActions>
        <Button variant="outlined">취소</Button>
        <Button>확인</Button>
      </ModalActions>
    </>
  ),
}
