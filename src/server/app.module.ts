import { Module } from '@nestjs/common';
import { ViewModule } from './view/view.module';

@Module({
  imports: [ViewModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
