export function stringToASCII(str) {
  try {
    return str
      .replace(/[àáảãạâầấẩẫậăằắẳẵặ]/gi, 'a')
      .replace(/[èéẻẽẹêềếểễệ]/gi, 'e')
      .replace(/[đ]/gi, 'd')
      .replace(/[ìíỉĩị]/gi, 'i')
      .replace(/[òóỏõọôồốổỗộơờớởỡợ]/gi, 'o')
      .replace(/[ùúủũụưừứửữự]/gi, 'u')
      .replace(/[ỳýỷỹỵ]/gi, 'y')
      .replace(/[w]/gi, 'w')
      .replace(/[z]/gi, 'z')
  } catch {
    return ''
  }
}
