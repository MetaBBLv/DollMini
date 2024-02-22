export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

export const lightBlue: { [key: number]: string } = {
  0: '#E1F5FE',
  100: '#B3E5FC',
  200: '#81D4FA',
  300: '#4FC3F7',
  400: '#29B6F6',
  500: '#03A9F4',
  600: '#039BE5',
  700: '#0288D1',
  800: '#0277BD',
  900: '#01579B',
}

export const generateList = (childCount: number): { id: number; color: string }[] => {
  const ans: { id: number; color: string }[] = []
  for (let i = 0; i < childCount; i++) {
    ans.push({
      id: i,
      color: lightBlue[100 * (i % 9)],
    })
  }
  return ans
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max)
}

export const generateGridList = (childCount: number, columns: number): { id: number; sub: number;commodity:string; exchangeNum: number; inventory: number }[] => {
  const ans: { id: number; sub: number; commodity:string; exchangeNum: number; inventory: number }[] = []
  for (let i = 0; i < childCount; i++) {
    ans.push({
      id: i,
      sub: getRandomInt(columns) + 1,
      commodity: generateRandomChinese(Math.floor(Math.random() * 20) + 1),
      exchangeNum: Math.floor(Math.random() * 100) + 1,
      inventory: Math.floor(Math.random() * 100) + 1
    })
  }
  console.log(ans);
  
  return ans
}

function generateRandomChinese(length: number): string {
  let result = '';

  for (let i = 0; i < length; i++) {
    const unicode = Math.round(Math.random() * 20901) + 19968; // 19968 是汉字的起始 Unicode 编码，20901 是汉字的数量
    result += String.fromCharCode(unicode);
  }

  return result;
}
