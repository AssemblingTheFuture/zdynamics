import matplotlib.pyplot as plt
import numpy as np
from mpl_toolkits.mplot3d import Axes3D

# === CONFIGURACIÓN DE COLORES NEÓN ===
neon_cyan = '#00D4FF'
neon_magenta = '#FF00FF'
neon_orange = '#FF4500'
neon_purple = '#9D00FF'
white = '#FFFFFF'

def setup_fig():
    fig = plt.figure(figsize=(12, 12)) 
    ax = fig.add_subplot(111, projection='3d')
    fig.patch.set_alpha(0.0)
    ax.patch.set_alpha(0.0)
    ax.set_axis_off()
    ax.grid(False)
    ax.xaxis.set_pane_color((1.0, 1.0, 1.0, 0.0))
    ax.yaxis.set_pane_color((1.0, 1.0, 1.0, 0.0))
    ax.zaxis.set_pane_color((1.0, 1.0, 1.0, 0.0))
    return fig, ax

# ==========================================
# 1. CONTROL DE SISTEMAS (Halvorsen Correcto)
# ==========================================
# Reemplaza SOLO esta función en tu archivo images_v5.py o generate_hd_images.py

def plot_halvorsen_hd():
    fig, ax = setup_fig()
    
    # 1. Generación de Datos
    a = 1.4
    dt = 0.005 
    num_steps = 50000 
    
    xs, ys, zs = np.zeros(num_steps), np.zeros(num_steps), np.zeros(num_steps)
    xs[0], ys[0], zs[0] = -5, 0, 0 

    for i in range(num_steps - 1):
        x, y, z = xs[i], ys[i], zs[i]
        dx = -a*x - 4*y - 4*z - y**2
        dy = -a*y - 4*z - 4*x - z**2
        dz = -a*z - 4*x - 4*y - x**2
        xs[i+1] = x + dx * dt
        ys[i+1] = y + dy * dt
        zs[i+1] = z + dz * dt

    # Limpieza
    discard = 10000
    xs, ys, zs = xs[discard:], ys[discard:], zs[discard:]

    # 2. TRANSFORMACIÓN (Alinear diagonal con Z)
    # Esto ya funcionó bien para separar los colores, lo mantenemos igual
    xs_rot = (xs - ys) / np.sqrt(2)
    ys_rot = (xs + ys - 2*zs) / np.sqrt(6)
    zs_rot = (xs + ys + zs) / np.sqrt(3)

    # 3. COLOREADO ESPACIAL (Izquierda vs Derecha)
    mask_right = xs_rot > 0
    
    # Usamos s=0.2 para que se vea más nítido y fino como en tu referencia
    ax.scatter(xs_rot[mask_right], ys_rot[mask_right], zs_rot[mask_right], 
               c=neon_cyan, s=0.2, alpha=0.8, linewidth=0)
               
    ax.scatter(xs_rot[~mask_right], ys_rot[~mask_right], zs_rot[~mask_right], 
               c=neon_magenta, s=0.2, alpha=0.8, linewidth=0)

    # 4. CÁMARA (LA CORRECCIÓN)
    # Rotamos 90 grados sobre el eje X para ver el "Corazón" de frente
    # elev=90: Vista superior (Top-down) del eje Z transformado
    # azim=-90: Mantiene el Cian a la derecha y Magenta a la izquierda
    ax.view_init(elev=90, azim=-90) 
    
    # Ajustar zoom
    max_range = 18 # Un poco más amplio para asegurar que quepa todo el corazón
    ax.set_xlim(-max_range, max_range)
    ax.set_ylim(-max_range, max_range)
    ax.set_zlim(-max_range, max_range)

    plt.savefig('control.png', transparent=True, dpi=150, bbox_inches='tight', pad_inches=0.0)
    print("Generada: control.png")
    plt.close()

# ==========================================
# 2. PYTHON ROBOTICS (Texto Centrado)
# ==========================================
def plot_python_robotics_hd():
    fig, ax = setup_fig()
    
    t = np.linspace(0, 20, 500)
    x = 2 * np.cos(t)
    y = 2 * np.sin(t)
    z = t/3
    
    ax.plot(x, y, z, color=neon_purple, linewidth=4, alpha=0.9)
    
    rx, ry, rz = x[-1], y[-1], z[-1]
    s = 0.6 
    
    top = [rx, ry, rz+s]
    b1 = [rx+s, ry-s, rz-s]
    b2 = [rx-s, ry-s, rz-s]
    b3 = [rx, ry+s, rz-s]
    
    lines = [[top, b1], [top, b2], [top, b3], [b1, b2], [b2, b3], [b3, b1]]
    for start, end in lines:
        ax.plot([start[0], end[0]], [start[1], end[1]], [start[2], end[2]], color=neon_cyan, linewidth=3)

    ax.scatter(rx, ry, rz, color=white, s=400, edgecolors=neon_cyan, linewidth=2, zorder=20)
    
    # --- TEXTO ---
    # Movemos el texto más al centro (x=0.15 en lugar de 0.05) y bajamos un poco (y=0.6)
    # Reducimos fuente a 11 para que no se salga
    code_snippet = """>>> import zdynamics\n>>> bot = zd.Drone()\n>>> bot.takeoff()\n>>> bot.follow(path)\n[OK] Path Completed."""
    ax.text2D(0.15, 0.6, code_snippet, transform=ax.transAxes, 
              color=neon_cyan, fontsize=12, family='monospace', weight='bold')

    ax.view_init(elev=15, azim=30)
    ax.set_xlim(-3, 3)
    ax.set_ylim(-3, 3)
    
    plt.savefig('python_robotics.png', transparent=True, dpi=150, bbox_inches='tight', pad_inches=0.1)
    print("Generada: python_robotics.png")
    plt.close()

# ==========================================
# 3. MÉTODOS NUMÉRICOS (Sin cambios, solo regenerar)
# ==========================================
def plot_numerical_hd():
    fig, ax = setup_fig()
    X = np.arange(-5, 5, 0.1) 
    Y = np.arange(-5, 5, 0.1)
    X, Y = np.meshgrid(X, Y)
    Z = np.sin(np.sqrt(X**2 + Y**2)) * 2 + 0.1 * X 
    ax.plot_wireframe(X, Y, Z, rstride=4, cstride=4, color=neon_cyan, alpha=0.3, linewidth=0.5)
    path_x = np.linspace(-4, 0, 50)
    path_y = np.linspace(-4, 0, 50)
    path_z = np.sin(np.sqrt(path_x**2 + path_y**2)) * 2 + 0.1 * path_x + 0.5 
    ax.plot(path_x, path_y, path_z, color=neon_orange, linewidth=5, zorder=10)
    ax.scatter(path_x[-1], path_y[-1], path_z[-1], color=white, s=300, zorder=11)
    ax.view_init(elev=35, azim=-60)
    plt.savefig('numerical.png', transparent=True, dpi=150, bbox_inches='tight', pad_inches=0.1)
    print("Generada: numerical.png")
    plt.close()

# ==========================================
# 4. ROBÓTICA CINEMÁTICA (Corrección ISO Frame)
# ==========================================
def plot_robotics_hd():
    fig, ax = setup_fig()
    
    u, v = np.mgrid[0:2*np.pi:40j, 0:np.pi:20j]
    r = 4.5
    x = r*np.cos(u)*np.sin(v)
    y = r*np.sin(u)*np.sin(v)
    z = r*np.cos(v) + 2
    ax.plot_wireframe(x, y, z, color=neon_cyan, alpha=0.15, linewidth=0.5)

    joints_x = [0, 0, 2, 3.5, 4]
    joints_y = [0, 0, 0, 0, 0.5]
    joints_z = [0, 2, 4, 3, 3]
    
    ax.plot(joints_x, joints_y, joints_z, color=white, linewidth=6, zorder=10)
    ax.plot(joints_x, joints_y, joints_z, color=neon_cyan, linewidth=18, alpha=0.3, zorder=9)
    ax.scatter(joints_x, joints_y, joints_z, s=500, c='#0b1120', edgecolors=neon_orange, linewidth=3, zorder=11)

    # --- MARCO DE REFERENCIA (ISO) ---
    end_x, end_y, end_z = joints_x[-1], joints_y[-1], joints_z[-1]
    L = 1.5 # Hacemos los ejes un poco más largos para que se vean bien
    
    # Eje X (Rojo) -> Hacia el frente (Digamos +X global para simplificar visualización)
    ax.plot([end_x, end_x+L], [end_y, end_y], [end_z, end_z], color='#FF0000', lw=5) 
    
    # Eje Y (Verde) -> Hacia la derecha (Digamos +Y global)
    ax.plot([end_x, end_x], [end_y, end_y-L], [end_z, end_z], color='#00FF00', lw=5)
    
    # Eje Z (Azul) -> Hacia ABAJO (-Z global)
    ax.plot([end_x, end_x], [end_y, end_y], [end_z, end_z-L], color='#0000FF', lw=5) # <--- CAMBIO AQUÍ (-L)

    ax.view_init(elev=20, azim=45)
    plt.savefig('robotics.png', transparent=True, dpi=150, bbox_inches='tight', pad_inches=0.1)
    print("Generada: robotics.png")
    plt.close()

if __name__ == "__main__":
    print("Generando imágenes...")
    plot_halvorsen_hd()
    plot_python_robotics_hd()
    plot_numerical_hd()
    plot_robotics_hd()
    print("¡Listo!")