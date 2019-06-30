export class RouteGroupTag {
  static CHANGE_DETECTION = 'Отслеживание изменений';
  static SERVICES_AND_DI = 'Сервисы и DI';
  static PIPES = 'Пайпы';
  static FORMS = 'Работа с формами';
  static values = () => {
    return [
      RouteGroupTag.CHANGE_DETECTION,
      RouteGroupTag.SERVICES_AND_DI,
      RouteGroupTag.PIPES,
      RouteGroupTag.FORMS
    ];
  }
}
