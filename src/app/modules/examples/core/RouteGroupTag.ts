export class RouteGroupTag {
  static CHANGE_DETECTION = 'Отслеживание изменений';
  static SERVICES_AND_DI = 'Сервисы и DI';
  static PIPES = 'Пайпы';
  static FORMS = 'Работа с формами';
  static REGEXP = 'Регулярные выражения';
  static RXJS = 'Работа с библиотекой RxJs';
  static values = () => {
    return [
      RouteGroupTag.CHANGE_DETECTION,
      RouteGroupTag.SERVICES_AND_DI,
      RouteGroupTag.PIPES,
      RouteGroupTag.FORMS,
      RouteGroupTag.REGEXP,
      RouteGroupTag.RXJS,
    ];
  }
}
