export class Responsitivity {
  private phoneWidth = 700
  private isPhone: boolean
  private setIsPone: React.Dispatch<React.SetStateAction<boolean>>

  constructor(
    booleanUseState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  ) {
    this.isPhone = booleanUseState[0]
    this.setIsPone = booleanUseState[1]

    this.initResponsitivity()
  }
  private initResponsitivity = () => {
    setTimeout(() => {
      this.setIsPone(
        window.document.documentElement.clientWidth < this.phoneWidth
      )
    }, 1)
    window.addEventListener('resize', (e: any) => {
      e.target && e.target.innerWidth < this.phoneWidth
        ? this.setIsPone(true)
        : this.setIsPone(false)
    })
  }
  public responsitivity = (): string => {
    return this.isPhone ? '-phone' : '-desktop'
  }
  public getUseState = (): [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] => {
    return [this.isPhone, this.setIsPone]
  }
}
