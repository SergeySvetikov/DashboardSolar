import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ICategory } from '../../../interfaces/category.model';
import { NgxMaskDirective } from 'ngx-mask';

type AdvertCategories = ICategory & { subCategories?: ICategory[] };
@Component({
  selector: 'app-my-new-product',
  templateUrl: './my-new-product.component.html',
  styleUrls: ['./my-new-product.component.scss'],
  imports: [CascadeSelectModule, NgxMaskDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MyNewProductComponent {
  categories: AdvertCategories[] = [
    {
      id: '1',
      name: 'Транспорт',
      parentId: 'none',
      subCategories: [
        {
          id: '11',
          name: 'Автомобили',
          parentId: '1',
        },
        {
          id: '12',
          name: 'Мотоциклы и мототехника',
          parentId: '1',
        },
        {
          id: '13',
          name: 'Грузовики и спецтехника',
          parentId: '1',
        },
        {
          id: '14',
          name: 'Запчасти и аксессуары',
          parentId: '1',
        },
        {
          id: '15',
          name: 'Водный транспорт',
          parentId: '1',
        },
      ],
    },
    {
      id: '2',
      name: 'Недвижимость',
      parentId: 'none',
      subCategories: [
        {
          id: '21',
          name: 'Купить жилье',
          parentId: '2',
        },
        {
          id: '22',
          name: 'Снять посуточно',
          parentId: '2',
        },
        {
          id: '23',
          name: 'Снять долгосрочно',
          parentId: '2',
        },
        {
          id: '24',
          name: 'Коммерческая недвижимость',
          parentId: '2',
        },
        {
          id: '25',
          name: 'Другие категории',
          parentId: '2',
        },
      ],
    },
    {
      id: '3',
      name: 'Работа',
      parentId: 'none',
      subCategories: [
        {
          id: '31',
          name: 'Ищу работу',
          parentId: '3',
        },
        {
          id: '32',
          name: 'Ищу сотрудника',
          parentId: '3',
        },
      ],
    },
    {
      id: '4',
      name: 'Услуги',
      parentId: 'none',
      subCategories: [
        {
          id: '41',
          name: 'Транспорт, перевозки',
          parentId: '4',
        },
        {
          id: '42',
          name: 'Ремонт и отделка',
          parentId: '4',
        },
        {
          id: '43',
          name: 'Сад, благоустройство',
          parentId: '4',
        },
        {
          id: '44',
          name: 'Красота и здоровье',
          parentId: '4',
        },
        {
          id: '45',
          name: 'Ремонт и обслуживание',
          parentId: '4',
        },
        {
          id: '46',
          name: 'Деловые услуги',
          parentId: '4',
        },
        {
          id: '47',
          name: 'IT, интернет, телеком',
          parentId: '4',
        },
        {
          id: '48',
          name: 'Бытовые услуги',
          parentId: '4',
        },
        {
          id: '49',
          name: 'Праздники, мероприятия',
          parentId: '4',
        },
        {
          id: '50',
          name: 'Обучение, курсы',
          parentId: '4',
        },
      ],
    },
  ];

  log($event: any) {}
}
