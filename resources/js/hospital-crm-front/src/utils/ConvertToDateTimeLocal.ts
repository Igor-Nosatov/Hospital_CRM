export function convertToDateTimeLocal(isoDateString: string): string {
    // Создаем новый объект Date из ISO-строки
    const date = new Date(isoDateString);

    // Получаем компоненты даты и времени
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Добавляем ведущий ноль, если месяц < 10
    const day = String(date.getDate()).padStart(2, '0'); // Добавляем ведущий ноль, если день < 10
    const hours = String(date.getHours()).padStart(2, '0'); // Добавляем ведущий ноль, если час < 10
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Добавляем ведущий ноль, если минута < 10

    // Формируем строку в формате YYYY-MM-DDTHH:MM
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}
