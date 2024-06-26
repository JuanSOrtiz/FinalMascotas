import { Module } from '@nestjs/common';
import { PetModule } from './pet/pet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedModule } from './breed/breed.module';
import { SpecieModule } from './specie/specie.module';
import { ShelterModule } from './shelter/shelter.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GenderModule } from './gender/gender.module';
import { AdoptionModule } from './adoption/adoption.module';
import { AdoptionStatusModule } from './adoption_status/adoption_status.module';
import { AdoptionCommentaryModule } from './adoption_commentary/adoption_commentary.module';
import { AnimalSexModule } from './animal_sex/animal_sex.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "petproject",
      autoLoadEntities: true,
      synchronize: true,
    }),
    PetModule,
    BreedModule,
    SpecieModule,
    ShelterModule,
    UserModule,
    AuthModule,
    GenderModule,
    AdoptionModule,
    AdoptionStatusModule,
    AdoptionCommentaryModule,
    AnimalSexModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
