import { ActorModel } from './model/actor.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';
import { ActorController } from './actor.controller';
import { ActorService } from './actor.service';

@Module({
   imports: [
      TypegooseModule.forFeature([
         {
            typegooseClass: ActorModel,
            schemaOptions: {
               collection: 'Actor',
            },
         },
      ]),
   ],
   controllers: [ActorController],
   providers: [ActorService],
})
export class ActorModule {}