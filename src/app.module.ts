import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.Module';
import { AuthService } from './auth/auth.service';
import { BookMarkModule } from './bookmark/bookmark.module';
import { BookmarkService } from './bookmark/bookmark.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [AuthModule, UserModule, BookMarkModule],
  controllers: [AppController],
  providers: [AppService, BookmarkService, AuthService, UserService],
})
export class AppModule {}
