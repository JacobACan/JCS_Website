export class Responsitivity {
  private phoneWidth = 700
  private booleanUseState: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ]
  constructor(
    booleanUseState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  ) {
    this.booleanUseState = booleanUseState
    this.initResponsitivity()
  }
  private initResponsitivity = () => {
    window.addEventListener('resize', (e: any) => {
      e.target && e.target.innerWidth < this.phoneWidth
        ? this.booleanUseState[1](true)
        : this.booleanUseState[1](false)
    })
  }
  public responsitivity = (): string => {
    return this.booleanUseState[0] ? '-phone' : '-desktop'
  }
  public getUseState = (): [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] => {
    return this.booleanUseState
  }
}
