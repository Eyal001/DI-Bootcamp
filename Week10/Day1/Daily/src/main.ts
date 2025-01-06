function validateUnionType(value: any, allowedTypes: string[]): boolean {
  for (let type in allowedTypes) {
    if (typeof value === type) {
      return true;
    }
  }
  return false;
}
