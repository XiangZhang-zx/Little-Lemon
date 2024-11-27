// 模拟API实现
export function fetchAPI(date: Date): string[] {
  // 模拟可用时间段
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export function submitAPI(formData: any): boolean {
  // 模拟提交成功
  console.log('提交的预订数据:', formData);
  return true;
} 