Do this now
1. Log out completely

From Ubuntu GUI:

Top right menu → Power / Log Out → Log Out

Then log in as:

tempadmin
2. After logging in as tempadmin, run:
sudo usermod -l mohsen webnevisan
sudo usermod -d /home/mohsen -m mohsen
sudo groupmod -n mohsen webnevisan

Then make sure mohsen is still sudo user:

sudo usermod -aG sudo mohsen
3. Reboot
sudo reboot

After reboot, log in as:

mohsen

Terminal should become:

mohsen@mohsen
If Ubuntu still shows old name in login screen

After logging in as mohsen, run:

sudo chfn -f Mohsen mohsen
After everything works, remove tempadmin
sudo deluser --remove-home tempadmin

Do not run the rename commands while logged in as webnevisan.
