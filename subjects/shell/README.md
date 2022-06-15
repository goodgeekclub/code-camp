# Shell
พื้นฐานการใช้งาน Linux และคำสั่งพื้นฐานที่จำเป็นต้องรู้

![Linux-Cover](../../assets/linux-cover.webp)

[Linux] is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a [Linux distribution].

[Read More...why we use linux ?]


## Basic Commands

### Print working directory

Show where you are.
```bash
pwd
```

**Example**
```bash
$ pwd
/Users/username
```

### List file

List all files in specific directory
```bash
ls <option> <directory>
```

**Example**
List in current directory
```bash
$ ls
Documents Downloads Desktop test.txt
```

List files with detail
```bash
$ ls -l
total 40
drwxr-xr-x    3 araiva  staff     96 Jan 24 15:12 Documents
drwxr-xr-x@   8 araiva  staff    256 May 11  2020 Downloads
drwxr-xr-x  452 araiva  staff  14464 Jun  3  2019 Desktop
-rwxr-xr-x@   7 araiva  staff    224 Oct  5  2018 test.txt
```

List all files with detail including hidden files.

```bash
$ ls -al
total 42
drwx------+  12 araiva  staff    384 Jun 14 21:25 .
drwxr-xr-x+ 131 araiva  staff   4192 Jun 15 14:29 ..
-rwxr-xr-x@   7 araiva  staff    224 Oct  5  2018 .hidden.txt
drwxr-xr-x    3 araiva  staff     96 Jan 24 15:12 Documents
drwxr-xr-x@   8 araiva  staff    256 May 11  2020 Downloads
drwxr-xr-x  452 araiva  staff  14464 Jun  3  2019 Desktop
-rwxr-xr-x@   7 araiva  staff    224 Oct  5  2018 test.txt
```

### Make directory

Create new directory with name in current directory
```bash
mkdir <dirname>
```

**Example**
```bash
$ mkdir New
$ ls
Documents Downloads Desktop New test.txt
```

### Remove directory

Remove specifi directory
```bash
rmdir <dirname>
```

**Example**
```bash
$ rmdir New
$ ls
Documents Downloads Desktop New test.txt
```

### Change directory

Turn you in specific directory
```bash
$ cd Documents
$ pwd
/Users/username/Documents
```

Turn you out to parent directory
```bash
$ pwd
/Users/username/Documents
$ cd ../
$ pwd
/Users/username
```

# Resource
- [Linux]
- [Linux distribution]
- [Read More...why we use linux ?]
- [Basic Linux Command]
- [Presentation]
<!-- Link -->
[Linux]: https://en.wikipedia.org/wiki/Linux
[Linux distribution]: https://www.tecmint.com/linux-distro-for-power-users/
[Read More...why we use linux ?]: https://www.linux.com/what-is-linux/
[Basic Linux Command]: https://maker.pro/linux/tutorial/basic-linux-commands-for-beginners
[presentation]: https://www.canva.com/design/DAE7mNR2Y74/klxv3I4N3dc666YUYMZ2aw/view?utm_content=DAE7mNR2Y74&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent
